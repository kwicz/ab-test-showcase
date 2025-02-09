import SocialProofControl from '../components/tests/SocialProof/SocialProofControl';
import { applySocialProofVariant } from '../utils/abTests/socialProofVariant';

export const abTests = [
  {
    id: 'homepage-button',
    name: 'Homepage Button Color Test',
    description: 'Testing the impact of button color on conversion rates.',
    hypothesis: 'Changing the button from blue to green will increase signups.',
    methodology:
      '50% of users saw a blue button, 50% saw a green button. We tracked conversion rates for 30 days.',
    results: 'Green button led to a 15% increase in signups.',
    date: '2024-01-15',
    variants: [
      {
        name: 'Blue Button (Control)',
        description: 'Original button with blue background.',
        screenshot: '/images/blue-button.png',
      },
      {
        name: 'Green Button (Variant)',
        description: 'New button with green background.',
        screenshot: '/images/green-button.png',
      },
    ],
  },
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
];
