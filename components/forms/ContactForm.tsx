"use client";

import { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Send, Loader2 } from "lucide-react";
export default function ContactForm() {
  const { t } = useLanguage();
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState<{ email?: string }>({});
  const [status, setStatus] = useState<{
    type: "idle" | "sending" | "ok" | "error";
    text?: string;
  }>({
    type: "idle",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    if (name === "email" && formErrors.email) {
      setFormErrors({});
    }
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    //validate email
    if (!validateEmail(form.email)) {
      setFormErrors({ email: t("submitForm.validation") });
      return;
    }

    setStatus({ type: "sending", text: t("submitForm.sending") });

    try {
      await emailjs.sendForm(
        "default_service",
        "template_ixuq35o",
        formRef.current!,
        "ehdE9q289VbqNO4oU" //public key
      );

      setForm({ name: "", email: "", phone: "", message: "" });
      setFormErrors({});
      setStatus({ type: "ok", text: t("submitForm.ok") });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus({
        type: "error",
        text: t("submitForm.error"),
      });
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
      {/* Name Field */}
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        required
        placeholder={t("submitForm.fullName")}
        className="w-full border rounded p-2 placeholder:text-sm"
      />

      {/* Email and Phone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder={t("submitForm.emailAddress")}
            className={`w-full border rounded p-2 placeholder:text-sm ${
              formErrors.email ? "border-red-500" : ""
            }`}
          />
          {formErrors.email && (
            <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
          )}
        </div>

        <input
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          placeholder={t("submitForm.phoneNumber")}
          className="w-full border rounded p-2 placeholder:text-sm"
        />
      </div>

      {/* Message */}
      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        required
        rows={5}
        placeholder={t("submitForm.yourMessage")}
        className="w-full border rounded p-2 placeholder:text-sm"
      />

      {/* Submit/status button */}
      <div className="flex items-center gap-3">
        <Button
          type="submit"
          size="lg"
          disabled={status.type === "sending"}
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100 disabled:opacity-50"
        >
          {status.type === "sending" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin mr-2" />
              {t("submitForm.sending")}
            </>
          ) : (
            <>
              <Send className="w-4 h-4 mr-2" />
              {t("submitForm.send")}
            </>
          )}
        </Button>
        {status.type !== "idle" && (
          <p
            className={`text-sm font-medium ${
              status.type === "error" ? "text-red-500" : "text-green-600"
            }`}
          >
            {status.text}
          </p>
        )}
      </div>
    </form>
  );
}
