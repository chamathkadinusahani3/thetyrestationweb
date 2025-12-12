import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircleIcon, AlertCircleIcon } from "lucide-react";

interface FormData {
  businessName: string;
  ownerName: string;
  contact: string;
  email: string;
  address: string;
  brand: string;
  businessType: string;
  registerNumber: string;
  monthlySales: string;
  paymentMethod: string;
  overseasBuyer: string;
}

export default function DealerForm() {
  const [formData, setFormData] = useState<FormData>({
    businessName: "",
    ownerName: "",
    contact: "",
    email: "",
    address: "",
    brand: "",
    businessType: "",
    registerNumber: "",
    monthlySales: "",
    paymentMethod: "",
    overseasBuyer: "No",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const payload = {
        access_key: "7445c1a8-b762-4d39-a84f-0f56d58f1c65",
        form_type: "Dealer Registration",
        subject: `New Dealer Registration - ${formData.businessName}`,
        from_name: "The Tyre Station Website",
        message: `
New Dealer Registration
--------------------------------
Business Name: ${formData.businessName}
Owner Name: ${formData.ownerName}
Contact Number: ${formData.contact}
Email: ${formData.email}
Address: ${formData.address}

Preferred Brand: ${formData.brand}
Business Type: ${formData.businessType}
Business Register Number: ${formData.registerNumber}
Monthly Tyre Sales: ${formData.monthlySales}
Payment Method: ${formData.paymentMethod}
Overseas Buyer: ${formData.overseasBuyer}
`.trim(),
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setFormData({
          businessName: "",
          ownerName: "",
          contact: "",
          email: "",
          address: "",
          brand: "",
          businessType: "",
          registerNumber: "",
          monthlySales: "",
          paymentMethod: "",
          overseasBuyer: "No",
        });

        // Auto-hide popup after 3s
        setTimeout(() => setSubmitStatus("idle"), 3000);
      } else {
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus("idle"), 3000);
      }
    } catch {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-24 bg-black overflow-hidden">

      {/* Centered Popup Notification */}
      {submitStatus !== "idle" && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none"
        >
          <div
            className={`text-white font-semibold p-6 rounded-xl shadow-xl text-center max-w-xs mx-auto pointer-events-auto ${
              submitStatus === "success"
                ? "bg-green-500/95"
                : "bg-red-500/95"
            }`}
          >
            {submitStatus === "success" ? (
              <>
                <CheckCircleIcon className="w-8 h-8 mx-auto mb-2" />
                Dealer request submitted successfully!We'll contact you soon.
              </>
            ) : (
              <>
                <AlertCircleIcon className="w-8 h-8 mx-auto mb-2" />
                Failed to submit dealer request.
              </>
            )}
          </div>
        </motion.div>
      )}

      <div className="absolute inset-0 opacity-40">
        <motion.div
          animate={{ opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-yellow-500/10 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center text-4xl sm:text-5xl font-black text-white mb-4"
        >
          Dealer{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
            Registration
          </span>
        </motion.h2>

        <p className="text-center text-white/60 text-xl mb-12">
          Become an official dealer of The Tyre Station
        </p>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-yellow-400/20 space-y-6"
        >
          <div className="space-y-4">
            <InputField
              label="Business Name"
              value={formData.businessName}
              onChange={(v) => setFormData({ ...formData, businessName: v })}
              placeholder="Business / Shop Name"
            />

            <InputField
              label="Owner Name"
              value={formData.ownerName}
              onChange={(v) => setFormData({ ...formData, ownerName: v })}
              placeholder="Owner's Full Name"
            />

            <InputField
              label="Contact Number"
              value={formData.contact}
              onChange={(v) => setFormData({ ...formData, contact: v })}
              placeholder="+94 77 123 4567"
            />

            <InputField
              label="Email"
              type="email"
              value={formData.email}
              onChange={(v) => setFormData({ ...formData, email: v })}
              placeholder="example@gmail.com"
            />

            <div>
              <label className="text-white/80 font-medium">Business Address</label>
              <textarea
                rows={3}
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg bg-black/50 border border-yellow-400/30 text-white resize-none"
                placeholder="Full business address"
              />
            </div>

            <SelectField
              label="Which Brand?"
              value={formData.brand}
              onChange={(v) => setFormData({ ...formData, brand: v })}
              options={[
                "Kinto",
                "Kapsen",
                "Tracmax",
                "Eagle Pro",
                "Landspider",
                "Yokohama",
                "Hauvrex",
              ]}
            />

            <InputField
              label="Business Type"
              value={formData.businessType}
              onChange={(v) => setFormData({ ...formData, businessType: v })}
              placeholder="Tyre Shop / Auto Service / Wholesale etc."
            />

            <InputField
              label="Business Register Number"
              value={formData.registerNumber}
              onChange={(v) => setFormData({ ...formData, registerNumber: v })}
              placeholder="BRN / VAT / Company Number"
            />

            <InputField
              label="How many pieces sell per month?"
              value={formData.monthlySales}
              onChange={(v) => setFormData({ ...formData, monthlySales: v })}
              placeholder="Example: 50 - 200"
            />

            <SelectField
              label="Payment Method"
              value={formData.paymentMethod}
              onChange={(v) =>
                setFormData({ ...formData, paymentMethod: v })
              }
              options={["Cash", "Credit"]}
            />

            <SelectField
              label="Are you an overseas buyer?"
              value={formData.overseasBuyer}
              onChange={(v) =>
                setFormData({ ...formData, overseasBuyer: v })
              }
              options={["No", "Yes"]}
            />
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={!isSubmitting ? { scale: 1.02 } : {}}
            className="w-full py-4 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold text-lg shadow-lg"
          >
            {isSubmitting ? "Sending..." : "Submit Dealer Request"}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}

/* --- Reusable Components (Typed) --- */
interface InputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
}

function InputField({ label, value, onChange, placeholder, type = "text" }: InputProps) {
  return (
    <div>
      <label className="text-white/80 font-medium">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 rounded-lg bg-black/50 border border-yellow-400/30 text-white"
        placeholder={placeholder}
      />
    </div>
  );
}

interface SelectProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}

function SelectField({ label, value, onChange, options }: SelectProps) {
  return (
    <div>
      <label className="text-white/80 font-medium">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 rounded-lg bg-black/50 border border-yellow-400/30 text-white"
      >
        <option value="">Select...</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
