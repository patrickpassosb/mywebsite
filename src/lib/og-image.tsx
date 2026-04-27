import { ImageResponse } from 'next/og';
import { contact } from '@/lib/site';

export const ogImageAlt =
  'Patrick Passos — Software Engineer building AI systems, web applications, and custom backends. Available for freelance work.';

export const ogImageSize = { width: 1200, height: 630 } as const;

export const ogImageContentType = 'image/png';

export async function renderOgImage() {
  const calLabel = contact.cal.replace(/^https?:\/\//, '');

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: '#0a0a0a',
          color: '#fafafa',
          padding: '72px 96px',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 18,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: '#a1a1aa',
            fontFamily: 'monospace',
          }}
        >
          Patrick Passos
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            flex: 1,
          }}
        >
          <div
            style={{
              display: 'flex',
              fontSize: 132,
              fontStyle: 'italic',
              fontFamily: 'serif',
              lineHeight: 1.02,
              color: '#fafafa',
            }}
          >
            Software Engineer
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: 36,
              fontSize: 24,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#a1a1aa',
              fontFamily: 'monospace',
            }}
          >
            AI systems · Web apps · Custom backends
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: 28,
            borderTop: '1px solid #27272a',
          }}
        >
          <div
            style={{
              display: 'flex',
              fontSize: 18,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: '#6e8eff',
              fontFamily: 'monospace',
            }}
          >
            Available for projects
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 18,
              letterSpacing: '0.12em',
              color: '#a1a1aa',
              fontFamily: 'monospace',
            }}
          >
            {calLabel}
          </div>
        </div>
      </div>
    ),
    { ...ogImageSize }
  );
}
