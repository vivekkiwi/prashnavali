'use client';

import { useEffect } from 'react';
import Clarity from '@microsoft/clarity';

const CLARITY_PROJECT_ID = process.env.NEXT_PUBLIC_CLARITY_ID;

export default function ClarityProvider() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      Clarity.init(CLARITY_PROJECT_ID);
    }
  }, []);

  return null;
}