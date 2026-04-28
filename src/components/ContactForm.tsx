import { useState } from 'react';

interface Labels {
  name?: { en?: string; fr?: string } | string;
  email?: { en?: string; fr?: string } | string;
  phone?: { en?: string; fr?: string } | string;
  message?: { en?: string; fr?: string } | string;
  submit?: { en?: string; fr?: string } | string;
}

interface Props {
  lang?: string;
  showPhone?: boolean;
  labels?: Labels;
  confirmationMessage?: string;
}

function tl(field: any, lang: string): string {
  if (!field) return '';
  if (typeof field === 'string') return field;
  return field[lang] || field.en || '';
}

export default function ContactForm({ lang = 'en', showPhone = true, labels, confirmationMessage }: Props) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setError('');

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error('Failed');
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
      setError(lang === 'fr'
        ? 'Une erreur est survenue. Veuillez réessayer.'
        : 'Something went wrong. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="contact-success">
        <div className="contact-success-icon">✓</div>
        <p className="text-accent" style={{ fontWeight: 'var(--fw-semi)' } as React.CSSProperties}>
          {confirmationMessage || (lang === 'fr'
            ? 'Message envoyé ! Nous vous répondrons sous peu.'
            : "Message sent! We'll get back to you shortly.")}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="form-group">
        <label htmlFor="name">{tl(labels?.name, lang) || (lang === 'fr' ? 'Nom complet' : 'Full Name')} *</label>
        <input id="name" name="name" type="text" required
          placeholder={lang === 'fr' ? 'Jean Tremblay' : 'John Smith'} />
      </div>

      <div className="form-group">
        <label htmlFor="email">{tl(labels?.email, lang) || 'Email'} *</label>
        <input id="email" name="email" type="email" required
          placeholder={lang === 'fr' ? 'jean@exemple.com' : 'john@example.com'} />
      </div>

      {showPhone && (
        <div className="form-group">
          <label htmlFor="phone">{tl(labels?.phone, lang) || (lang === 'fr' ? 'Téléphone' : 'Phone')}</label>
          <input id="phone" name="phone" type="tel"
            placeholder={lang === 'fr' ? '(514) 000-0000' : '(416) 000-0000'} />
        </div>
      )}

      <div className="form-group">
        <label htmlFor="message">{tl(labels?.message, lang) || (lang === 'fr' ? 'Message' : 'Message')} *</label>
        <textarea id="message" name="message" required
          placeholder={lang === 'fr'
            ? 'Parlez-nous de votre projet...'
            : 'Tell us about your project...'} />
      </div>

      {error && (
        <p className="form-error">{error}</p>
      )}

      <button
        type="submit"
        className="btn btn--primary btn--full"
        disabled={status === 'loading'}
      >
        {status === 'loading'
          ? (lang === 'fr' ? 'Envoi...' : 'Sending...')
          : (tl(labels?.submit, lang) || (lang === 'fr' ? 'Envoyer le message →' : 'Send Message →'))
        }
      </button>
    </form>
  );
}
