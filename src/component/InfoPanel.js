import React, { useEffect, useState } from 'react';
import GlobalStats from './GlobalStats';

export default function InfoPanel({ currentScreen }) {
  if (currentScreen === 0) return <GlobalStats />;
  else return <GlobalStats />;
}
