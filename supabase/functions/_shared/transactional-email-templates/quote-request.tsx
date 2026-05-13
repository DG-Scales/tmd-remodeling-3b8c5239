import * as React from 'npm:react@18.3.1'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface QuoteRequestProps {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  city?: string
  details?: string
}

const QuoteRequestEmail = ({
  firstName,
  lastName,
  email,
  phone,
  city,
  details,
}: QuoteRequestProps) => {
  const fullName = [firstName, lastName].filter(Boolean).join(' ') || 'New lead'
  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>New quote request from {fullName}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>New Quote Request</Heading>
          <Text style={text}>
            You have a new booking request from your TMD Remodeling website.
          </Text>
          <Section style={card}>
            <Row label="Name" value={fullName} />
            <Row label="Email" value={email || '—'} />
            <Row label="Phone" value={phone || '—'} />
            <Row label="City" value={city || '—'} />
          </Section>
          <Heading as="h2" style={h2}>Project details</Heading>
          <Text style={details ? text : muted}>
            {details || '(none provided)'}
          </Text>
          <Hr style={hr} />
          <Text style={muted}>
            Reply directly to this email to reach the customer.
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

const Row = ({ label, value }: { label: string; value: string }) => (
  <Text style={rowText}>
    <strong style={rowLabel}>{label}:</strong> {value}
  </Text>
)

export const template = {
  component: QuoteRequestEmail,
  subject: (data: Record<string, any>) => {
    const name = [data.firstName, data.lastName].filter(Boolean).join(' ')
    return name ? `New quote request from ${name}` : 'New quote request'
  },
  displayName: 'Quote request notification',
  to: 'tmdremodeling0227@gmail.com',
  previewData: {
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'jane@example.com',
    phone: '(617) 555-1234',
    city: 'Salem, MA',
    details: 'Looking to remodel my kitchen — granite counters and new cabinets.',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, sans-serif' }
const container = { padding: '24px', maxWidth: '560px' }
const h1 = { fontSize: '22px', fontWeight: 'bold', color: '#0f172a', margin: '0 0 16px' }
const h2 = { fontSize: '16px', fontWeight: 'bold', color: '#0f172a', margin: '20px 0 8px' }
const text = { fontSize: '14px', color: '#334155', lineHeight: '1.5', margin: '0 0 12px' }
const muted = { fontSize: '13px', color: '#64748b', lineHeight: '1.5', margin: '0 0 12px' }
const card = { backgroundColor: '#f8fafc', borderRadius: '8px', padding: '16px 20px', margin: '12px 0' }
const rowText = { fontSize: '14px', color: '#0f172a', margin: '4px 0' }
const rowLabel = { color: '#475569' }
const hr = { borderColor: '#e2e8f0', margin: '24px 0 12px' }
