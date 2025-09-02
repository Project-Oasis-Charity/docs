import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Logo from '@/public/img/logo2.png';
import Image from 'next/image';
import { BookIcon } from 'lucide-react';
import { type LinkItemType } from 'fumadocs-ui/layouts/docs';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <Image
            src={Logo}
            alt="Project Oasis Logo"
            priority={true}
            width="50"
            height="50"
            className="mr-2"
          />
          Project Oasis
        </>
      ),
    },
    githubUrl: 'https://github.com/Project-Oasis-Charity',
    // see https://fumadocs.dev/docs/ui/navigation/links
    links: [
    ],
  };
}
