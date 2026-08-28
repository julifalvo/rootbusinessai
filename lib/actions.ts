"use server";

import { CONTACT_SERVICE_OPTIONS } from "@/lib/data";

export type ContactFieldErrors = Partial<
  Record<"name" | "company" | "email" | "service" | "message", string>
>;

export type ContactFormState = {
  status: "idle" | "error" | "success";
  message: string;
  fieldErrors?: ContactFieldErrors;
};

export const initialContactState: ContactFormState = {
  status: "idle",
  message: "",
};

const VALID_SERVICE_VALUES = CONTACT_SERVICE_OPTIONS.map((option) => option.value);
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitContactRequest(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
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

  console.info("[contacto] Nueva solicitud de consultoría", {
    name,
    company,
    email,
    service,
    message,
  });

  return {
    status: "success",
    message: "¡Gracias! Te contactaremos en menos de 24 horas hábiles.",
  };
}
