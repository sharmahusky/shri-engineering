import { Section } from '@/components/layout';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, Badge } from '@/components/ui';
import { certifications } from '@/lib/constants/certifications';
import { companyInfo } from '@/lib/constants/company';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Certifications | Shri Engineering | ISO 9001:2015 Certified',
  description: 'Shri Engineering is ISO 9001:2015 certified with IAF and EGAC accreditations, ensuring quality management and excellence in manufacturing.',
};

export default function CertificationsPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="primary" className="text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-display font-bold mb-6">Certifications & Accreditations</h1>
          <p className="text-body-lg opacity-90">
            Our commitment to quality is recognized through various certifications
          </p>
        </div>
      </Section>

      {/* Certifications */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {certifications.map((cert) => (
              <Card key={cert.id} className="text-center">
                <CardHeader>
                  <div className="w-32 h-32 bg-neutral-100 rounded-lg mx-auto mb-6 flex items-center justify-center">
                    <span className="text-caption text-neutral-400">Logo</span>
                  </div>
                  <CardTitle>{cert.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{cert.description}</CardDescription>
                  {cert.certificateNumber && (
                    <p className="text-body-sm text-neutral-600 mt-4">
                      Certificate #: {cert.certificateNumber}
                    </p>
                  )}
                  {cert.validUntil && (
                    <p className="text-body-sm text-neutral-600 mt-2">
                      Valid until: {cert.validUntil}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Quality Assurance */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-h1 font-bold text-neutral-900 mb-4">Quality Assurance</h2>
            <p className="text-body-lg text-neutral-600">
              Our quality management system ensures excellence in every product
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Quality Control Processes</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-3">✓</span>
                    <span className="text-body-sm text-neutral-600">
                      Rigorous material inspection and testing
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3">✓</span>
                    <span className="text-body-sm text-neutral-600">
                      In-process quality checks at every stage
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3">✓</span>
                    <span className="text-body-sm text-neutral-600">
                      Final inspection before dispatch
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3">✓</span>
                    <span className="text-body-sm text-neutral-600">
                      Documentation and traceability
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Material Standards</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-3">✓</span>
                    <span className="text-body-sm text-neutral-600">
                      SS316, SS304, SS316L, SS304L
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3">✓</span>
                    <span className="text-body-sm text-neutral-600">
                      Mild Steel (MS) and MSRL
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3">✓</span>
                    <span className="text-body-sm text-neutral-600">
                      PP, UPVC, FRP materials
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3">✓</span>
                    <span className="text-body-sm text-neutral-600">
                      PTFE coating and specialized materials
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Certification Badge */}
      <Section background="white">
        <div className="max-w-2xl mx-auto text-center">
          <Badge variant="primary" className="text-lg px-6 py-3 mb-6">
            {companyInfo.certifications.join(' • ')}
          </Badge>
          <p className="text-body-lg text-neutral-600">
            Shri Engineering maintains the highest standards of quality and is committed to continuous improvement 
            in all our manufacturing processes.
          </p>
        </div>
      </Section>
    </>
  );
}

