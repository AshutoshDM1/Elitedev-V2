import { Suspense } from "react";

import {
  GitHubContributions,
  GitHubContributionsFallback,
} from "@/components/github-contributions";
import { getCachedContributions } from "@/lib/get-cached-contributions";
import Section from "@/components/common/Section/Section";
import BottomLine from "@/components/common/Section/BottomLine";

const GITHUB_USERNAME = "AshutoshDM1";
const GITHUB_PROFILE_URL = "https://github.com/AshutoshDM1";

export default function GitHubGraph() {
  const contributions = getCachedContributions(GITHUB_USERNAME);

  return (
    <BottomLine>
      <Section>
        <div style={{scrollbarWidth: "none"}}>
          <Suspense fallback={<GitHubContributionsFallback />}>
            <GitHubContributions
              contributions={contributions}
              githubProfileUrl={GITHUB_PROFILE_URL}
            />
          </Suspense>
        </div>
      </Section>
    </BottomLine>
  );
}
