"use server";

import {
  CONTACT_SERVICE_OPTIONS,
  type ContactFieldErrors,
  type ContactFormState,
} from "@/lib/data";

const VALID_SERVICE_VALUES = CONTACT_SERVICE_OPTIONS.map((option) => option.value);
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_FILL_TIME_MS = 1500;

const SUCCESS_STATE: ContactFormState = {
  status: "success",
  message: "¡Gracias! Te contactaremos en menos de 24 horas hábiles.",
};

export async function submitContactRequest(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // Honeypot: si un bot completó este campo invisible, fingimos éxito sin
  // procesar nada, para no revelar que fue detectado.
  const honeypot = String(formData.get("website") ?? "").trim();
  if (honeypot) {
    return SUCCESS_STATE;
  }

  // Un envío que llega casi instantáneamente después de que el form se
  // renderizó es casi siempre un script, no una persona completando campos.
  const renderedAt = Number(formData.get("renderedAt") ?? 0);
  if (renderedAt && Date.now() - renderedAt < MIN_FILL_TIME_MS) {
    return SUCCESS_STATE;
  }

  const name = String(formData.get("name") ?? "").trim();
  const company = String(formData.get("company") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const service = String(formData.get("service") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  const fieldErrors: ContactFieldErrors = {};
  if (name.length < 2) fieldErrors.name = "Ingresá tu nombre completo.";
  if (company.length < 2) fieldErrors.company = "Ingresá el nombre de tu empresa.";
  if (!EMAIL_PATTERN.test(email)) fieldErrors.email = "Ingresá un correo válido.";
  if (!VALID_SERVICE_VALUES.includes(service as (typeof VALID_SERVICE_VALUES)[number])) {
    fieldErrors.service = "Seleccioná un servicio de interés.";
  }
  if (message.length < 20) {
    fieldErrors.message =
      "Contanos un poco más sobre tu proyecto (mínimo 20 caracteres).";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Revisá los campos marcados antes de enviar.",
      fieldErrors,
    };
  }

  const payload = { name, company, email, service, message };
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch (error) {
      console.error(
        "[contacto] No se pudo registrar la solicitud en Sheets",
        error,
        payload
      );
    }
  } else {
    console.warn(
      "[contacto] GOOGLE_SHEETS_WEBHOOK_URL no configurada; solicitud no persistida",
      payload
    );
  }

  return SUCCESS_STATE;
}
