import { useState } from 'react';
import ContactLinks from '../components/ContactLinks.jsx';
import content from '../data/content.json';
import { validateName, validateEmail, validateMessage } from '../utils/validators.js';

const initialState = { name: '', email: '', message: '', company: '' };

export default function Contact() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [feedback, setFeedback] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (form.company) {
      return;
    }

    const newErrors = {
      name: validateName(form.name),
      email: validateEmail(form.email),
      message: validateMessage(form.message),
    };

    setErrors(newErrors);

    const hasError = Object.values(newErrors).some((error) => Boolean(error));
    if (hasError) {
      setStatus('error');
      setFeedback('Please fix the highlighted fields.');
      return;
    }

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFeedback('Thanks for sharing your goals. I will get back within one business day.');
      setForm(initialState);
    }, 400);
  };

  return (
    <div className="container section stack-lg">
      <div className="stack-md">
        <h1>Contact</h1>
        <p className="lead">Tell me about your business and goals.</p>
      </div>
      <div
        className="grid"
        style={{ gap: '3rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}
      >
        <form onSubmit={handleSubmit} noValidate aria-describedby={feedback ? 'form-feedback' : undefined}>
          <div className="visually-hidden">
            <label htmlFor="company">Company</label>
            <input id="company" name="company" value={form.company} onChange={handleChange} tabIndex="-1" autoComplete="off" />
          </div>
          <label htmlFor="name">
            Name
            <input id="name" name="name" value={form.name} onChange={handleChange} aria-invalid={Boolean(errors.name)} />
            {errors.name ? (
              <span className="text-muted" role="alert">
                {errors.name}
              </span>
            ) : null}
          </label>
          <label htmlFor="email">
            Email
            <input
              id="email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              aria-invalid={Boolean(errors.email)}
            />
            {errors.email ? (
              <span className="text-muted" role="alert">
                {errors.email}
              </span>
            ) : null}
          </label>
          <label htmlFor="message">
            Message
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              aria-invalid={Boolean(errors.message)}
            ></textarea>
            {errors.message ? (
              <span className="text-muted" role="alert">
                {errors.message}
              </span>
            ) : null}
          </label>
          <button type="submit" className="btn" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Sending…' : 'Send Message'}
          </button>
          {feedback ? (
            <p id="form-feedback" className={status === 'success' ? '' : 'text-muted'}>
              {feedback}
            </p>
          ) : null}
        </form>
        <ContactLinks contact={content.contact} />
      </div>
    </div>
  );
}
