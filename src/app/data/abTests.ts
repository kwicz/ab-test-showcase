import SocialProofControl from '../components/tests/SocialProof/SocialProofControl';
import { applySocialProofVariant } from '../utils/abTests/applySocialProofVariant';

export const abTests = [
  {
    id: 'social-proof',
    name: 'Ingredients Page Social Proof Test',
    description: 'Testing the impact of customer testimonials on revenue.',
    hypothesis: 'Adding dynamic reviews and videos will increase sales.',
    methodology:
      '50% of users saw the control, 50% saw Variant1. We tracked conversion rates for 30 days.',
    results: 'Adding social proof led to a 2.3% lift in conversion rates.',
    date: '2024-11-15',
    controlComponent: SocialProofControl,
    buildCode: applySocialProofVariant,
    variants: [
      {
        name: 'Static CTA and Image (Control)',
        description: 'Original product image with link to Shop.',
        screenshot: '/images/blue-button.png',
      },
      {
        name: 'Dynamic Reviews and Testimonials (Variant)',
        description: 'Reviews based on the type of review and videos.',
        screenshot: '/images/green-button.png',
      },
    ],
  },
  {
    id: 'two-page-form',
    name: 'Registration Form Length Test',
    description: 'In Development - Testing form length optimization',
    hypothesis: 'In Development',
    methodology: 'Test plan in development',
    results: 'Pending',
    date: '2024-TBD',
    variants: [
      {
        name: 'In Development',
        description: 'Test variants being designed',
        screenshot: '',
      },
    ],
  },
];
