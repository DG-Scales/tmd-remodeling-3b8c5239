import * as React from 'npm:react@18.3.1'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const TestEmail = () => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>TMD Remodeling deliverability test</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>It works! 🎉</Heading>
        <Text style={text}>
          This is a test email from <strong>notify.tmdremodeling.org</strong> to verify
          deliverability and confirm the unsubscribe link below works.
        </Text>
        <Text style={text}>
          If you received this in your inbox (not spam), your sender domain is healthy.
        </Text>
        <Hr style={hr} />
        <Text style={muted}>
          Sent from TMD Remodeling. Use the unsubscribe link below to verify the opt-out flow.
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: TestEmail,
  subject: 'TMD Remodeling — deliverability test',
  displayName: 'Deliverability test',
  previewData: {},
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, sans-serif' }
const container = { padding: '24px', maxWidth: '560px' }
const h1 = { fontSize: '22px', fontWeight: 'bold', color: '#0f172a', margin: '0 0 16px' }
const text = { fontSize: '14px', color: '#334155', lineHeight: '1.5', margin: '0 0 12px' }
const muted = { fontSize: '13px', color: '#64748b', lineHeight: '1.5', margin: '0' }
const hr = { borderColor: '#e2e8f0', margin: '24px 0 12px' }
