"use client";

import { type ReactNode, useActionState, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { submitContactRequest } from "@/lib/actions";
import { CONTACT_SERVICE_OPTIONS, initialContactState } from "@/lib/data";
import { cn } from "@/lib/utils";

type FieldName = "name" | "company" | "email" | "service" | "message";

const EMPTY_VALUES: Record<FieldName, string> = {
  name: "",
  company: "",
  email: "",
  service: "",
  message: "",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateField(field: FieldName, value: string): string | null {
  switch (field) {
    case "name":
      return value.trim().length < 2 ? "Ingresá tu nombre completo." : null;
    case "company":
      return value.trim().length < 2
        ? "Ingresá el nombre de tu empresa."
        : null;
    case "email":
      return EMAIL_PATTERN.test(value.trim())
        ? null
        : "Ingresá un correo válido.";
    case "service":
      return value ? null : "Seleccioná un servicio de interés.";
    case "message":
      return value.trim().length < 20
        ? "Contanos un poco más sobre tu proyecto (mínimo 20 caracteres)."
        : null;
  }
}

function FieldWrapper({
  label,
  htmlFor,
  error,
  valid,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  valid?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-sm font-medium text-white/80">
        {label}
      </label>
      <div className="relative">
        {children}
        {valid && !error && (
          <CheckCircle2
            size={16}
            aria-hidden
            className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-primary-glow"
          />
        )}
      </div>
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -4, height: 0 }}
            className="flex items-center gap-1.5 text-xs text-red-400"
          >
            <AlertCircle size={12} />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

function fieldClass(hasError: boolean, valid: boolean) {
  return cn(
    "w-full rounded-xl border bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder:text-white/30 outline-none backdrop-blur-sm transition-colors focus:border-primary-glow/60",
    hasError
      ? "border-red-400/50"
      : valid
        ? "border-primary-glow/40"
        : "border-white/10"
  );
}

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactRequest,
    initialContactState
  );
  const [values, setValues] = useState<Record<FieldName, string>>(EMPTY_VALUES);
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({});
  const [renderedAt] = useState(() => Date.now());

  if (state.status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-start gap-3 rounded-2xl border border-primary-glow/30 bg-primary-glow/5 p-8"
      >
        <CheckCircle2 size={28} className="text-primary-glow" />
        <h3 className="text-lg font-semibold text-white">
          Solicitud enviada
        </h3>
        <p className="text-sm text-muted">{state.message}</p>
      </motion.div>
    );
  }

  const errorFor = (field: FieldName) => {
    if (touched[field]) {
      const clientError = validateField(field, values[field]);
      if (clientError) return clientError;
    }
    return state.fieldErrors?.[field];
  };

  const isValid = (field: FieldName) =>
    !!touched[field] && !validateField(field, values[field]);

  const handleChange = (field: FieldName, value: string) =>
    setValues((prev) => ({ ...prev, [field]: value }));

  const handleBlur = (field: FieldName) =>
    setTouched((prev) => ({ ...prev, [field]: true }));

  return (
    <form action={formAction} className="flex flex-col gap-5">
      {state.status === "error" && (
        <p className="flex items-center gap-2 rounded-xl border border-red-400/30 bg-red-400/5 px-4 py-2.5 text-sm text-red-300">
          <AlertCircle size={14} />
          {state.message}
        </p>
      )}

      {/* Honeypot: invisible para personas, atractivo para bots que autocompletan todo. */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden"
      />
      <input type="hidden" name="renderedAt" value={renderedAt} />

      <div className="grid gap-5 sm:grid-cols-2">
        <FieldWrapper
          label="Nombre"
          htmlFor="name"
          error={errorFor("name")}
          valid={isValid("name")}
        >
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Tu nombre completo"
            value={values.name}
            onChange={(e) => handleChange("name", e.target.value)}
            onBlur={() => handleBlur("name")}
            className={fieldClass(!!errorFor("name"), isValid("name"))}
          />
        </FieldWrapper>

        <FieldWrapper
          label="Empresa"
          htmlFor="company"
          error={errorFor("company")}
          valid={isValid("company")}
        >
          <input
            id="company"
            name="company"
            type="text"
            placeholder="Nombre de tu empresa"
            value={values.company}
            onChange={(e) => handleChange("company", e.target.value)}
            onBlur={() => handleBlur("company")}
            className={fieldClass(!!errorFor("company"), isValid("company"))}
          />
        </FieldWrapper>
      </div>

      <FieldWrapper
        label="Correo Electrónico"
        htmlFor="email"
        error={errorFor("email")}
        valid={isValid("email")}
      >
        <input
          id="email"
          name="email"
          type="email"
          placeholder="tu@empresa.com"
          value={values.email}
          onChange={(e) => handleChange("email", e.target.value)}
          onBlur={() => handleBlur("email")}
          className={fieldClass(!!errorFor("email"), isValid("email"))}
        />
      </FieldWrapper>

      <FieldWrapper
        label="Servicio de Interés"
        htmlFor="service"
        error={errorFor("service")}
        valid={isValid("service")}
      >
        <select
          id="service"
          name="service"
          value={values.service}
          onChange={(e) => handleChange("service", e.target.value)}
          onBlur={() => handleBlur("service")}
          className={cn(
            fieldClass(!!errorFor("service"), isValid("service")),
            "appearance-none",
            !values.service && "text-white/30"
          )}
        >
          <option value="" disabled>
            Seleccioná un servicio
          </option>
          {CONTACT_SERVICE_OPTIONS.map((option) => (
            <option
              key={option.value}
              value={option.value}
              className="bg-surface text-white"
            >
              {option.label}
            </option>
          ))}
        </select>
      </FieldWrapper>

      <FieldWrapper
        label="Descripción del Proyecto"
        htmlFor="message"
        error={errorFor("message")}
        valid={isValid("message")}
      >
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Contanos qué querés automatizar o construir..."
          value={values.message}
          onChange={(e) => handleChange("message", e.target.value)}
          onBlur={() => handleBlur("message")}
          className={cn(fieldClass(!!errorFor("message"), isValid("message")), "resize-none")}
        />
      </FieldWrapper>

      <button
        type="submit"
        disabled={isPending}
        className="group relative mt-2 inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-8 py-3 text-sm font-semibold text-background transition-opacity disabled:cursor-not-allowed disabled:opacity-70"
      >
        <span className="relative z-10 inline-flex items-center gap-2">
          {isPending ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              Enviando...
            </>
          ) : (
            <>
              <Send size={16} />
              Enviar Solicitud
            </>
          )}
        </span>
        <span
          aria-hidden
          className={cn(
            "absolute inset-0 bg-gradient-to-r from-primary-glow via-white to-secondary-glow blur-md transition-opacity duration-500",
            isPending ? "animate-pulse opacity-40" : "opacity-0 group-hover:opacity-30"
          )}
        />
      </button>
    </form>
  );
}
