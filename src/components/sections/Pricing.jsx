import React, { useState } from "react";
import { CheckCircle, ArrowRight, Download, Calendar } from "lucide-react";
import Button from "../common/Button";
import ValueStackItem from "../common/ValueStackItem";
import GuaranteeCard from "../common/GuaranteeCard";
import { pricingData } from "../../data/pricingData";
import "./Pricing.css";
import { ctaLinks } from "../../config/ctaLinks";

const Pricing = () => {
  const [paymentOption, setPaymentOption] = useState("full"); // 'full' or 'installment'

  const { valueStack, pricing, guarantees } = pricingData;

  // Calculate total value
  const totalValue = valueStack.reduce((sum, item) => {
    return typeof item.retailValue === "number" ? sum + item.retailValue : sum;
  }, 0);

  return (
    <>
      <section className="section-padding pricing-section" id="pricing">
        <div className="container">
          {/* Section Header */}
          <div className="text-center section-header">
            <span className="section-label">Investment in Your Future</span>
            <h2>Transform Your Career for Less Than You Think</h2>
            <p className="pricing-subtitle">
              Join 200+ graduates who invested in themselves and landed their
              dream jobs
            </p>
          </div>

          {/* Trust Builders - BEFORE Pricing */}
          <div className="guarantees-grid">
            {guarantees.map((guarantee) => (
              <GuaranteeCard
                key={guarantee.id}
                icon={guarantee.icon}
                title={guarantee.title}
                description={guarantee.description}
              />
            ))}
          </div>

          {/* Main Pricing Card */}
          <div className="pricing-card-wrapper">
            <div className="pricing-card">
              {/* Value Stack Section */}
              <div className="pricing-value-section">
                <h3 className="value-section-title">What You Get:</h3>

                <div className="value-stack-list">
                  {valueStack.map((item) => (
                    <ValueStackItem
                      key={item.id}
                      icon={item.icon}
                      item={item.item}
                      retailValue={item.retailValue}
                    />
                  ))}
                </div>

                {/* Total Value */}
                <div className="total-value-box">
                  <span className="total-value-label">
                    Total Program Value:
                  </span>
                  <span className="total-value-amount">
                    ${totalValue.toLocaleString()}+
                  </span>
                </div>
              </div>

              {/* Pricing Reveal Section */}
              <div className="pricing-reveal-section">
                {/* Discount Badge */}
                <div className="discount-badge-large">
                  🎉 LIMITED TIME: Save {pricing.discountPercentage}%
                </div>

                {/* Price Display */}
                <div className="price-display">
                  <div className="price-old">
                    <span className="price-label">Regular Price:</span>
                    <span className="price-strike">${pricing.fullPrice}</span>
                  </div>
                  <div className="price-current">
                    <span className="price-label">Your Investment:</span>
                    <span className="price-main">
                      ${pricing.discountedPrice}
                    </span>
                  </div>
                </div>

                {/* Payment Options Toggle */}
                <div className="payment-options">
                  <button
                    className={`payment-option-btn ${
                      paymentOption === "full" ? "active" : ""
                    }`}
                    onClick={() => setPaymentOption("full")}
                  >
                    <CheckCircle size={18} />
                    Pay Full - Save $50
                  </button>
                  <button
                    className={`payment-option-btn ${
                      paymentOption === "installment" ? "active" : ""
                    }`}
                    onClick={() => setPaymentOption("installment")}
                  >
                    <Calendar size={18} />3 Monthly Payments
                  </button>
                </div>

                {/* Selected Payment Details */}
                <div className="payment-details">
                  {paymentOption === "full" ? (
                    <div className="payment-info">
                      <span className="payment-amount">
                        ${pricing.discountedPrice}
                      </span>
                      <span className="payment-description">
                        One-time payment + $50 bonus
                      </span>
                    </div>
                  ) : (
                    <div className="payment-info">
                      <span className="payment-amount">
                        ${pricing.installmentPrice}/mo
                      </span>
                      <span className="payment-description">
                        for {pricing.installmentMonths} months ($
                        {pricing.installmentPrice *
                          pricing.installmentMonths}{" "}
                        total)
                      </span>
                    </div>
                  )}
                </div>

                {/* Multi-Level CTAs */}
                <div className="cta-stack">
                  <Button
                    variant="primary"
                    className="cta-primary"
                    href={ctaLinks.consultation}
                    external={true}
                  >
                    Book Free Consultation
                    <ArrowRight size={20} />
                  </Button>

                  <Button
                    variant="outline"
                    className="cta-secondary"
                    href={ctaLinks.whatsapp}
                    external={true}
                  >
                    Discuss Payment Options
                  </Button>

                  <div className="cta-note">
                    💡 <strong>No payment required</strong> to book
                    consultation. Payment plans available after we discuss your
                    goals.
                  </div>
                </div>

                {/* Social Proof */}
                <div className="pricing-social-proof">
                  <div className="social-proof-avatars">
                    <img src="https://i.pravatar.cc/40?img=1" alt="Graduate" />
                    <img src="https://i.pravatar.cc/40?img=2" alt="Graduate" />
                    <img src="https://i.pravatar.cc/40?img=3" alt="Graduate" />
                    <span className="avatar-count">+197</span>
                  </div>
                  <span className="social-proof-text">
                    graduates enrolled this month
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ... later in the section ... */}

          {/* <Button variant="outline" href={ctaLinks.whatsapp} external={true}>
            Chat with Our Team
          </Button> */}
        </div>
      </section>
    </>
  );
};

export default Pricing;
