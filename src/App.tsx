import { Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/layout/layout';
import { HomePage } from '@/pages/home';
import { CoreMessagesPage } from '@/pages/core-messages';
import { AudienceDetailsPage } from '@/pages/audience-details';
import { RationalePage } from '@/pages/rationale';
import { RolloutPage } from '@/pages/rollout';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/core-messages" element={<CoreMessagesPage />} />
        <Route path="/audience-details" element={<AudienceDetailsPage />} />
        <Route path="/rationale" element={<RationalePage />} />
        <Route path="/rollout" element={<RolloutPage />} />
      </Route>
    </Routes>
  );
}

export default App;