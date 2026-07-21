import React from 'react';
import { WindowChrome, CardChip, GroupColumn } from './primitives';

const CardSortMockup = ({ className = '' }) => (
  <WindowChrome
    label="Card Sort · Onboarding Flow"
    className={className}
    right={
      <div className="flex items-center gap-2">
        <div className="w-16 h-1.5 rounded-full bg-[#E4E4E7] overflow-hidden">
          <div className="h-full w-4/5 bg-[#7161EF]" />
        </div>
        <span className="text-[10px] font-semibold text-[#9C9CA3]">8/10</span>
      </div>
    }
  >
    <div className="p-4 bg-white/40 backdrop-blur-sm">
      <div className="flex gap-3">
        <GroupColumn title="Unsorted" count={2}>
          <CardChip label="Billing FAQ" faded />
          <CardChip label="Data Export" faded />
        </GroupColumn>
        <GroupColumn title="Getting Started" count={3}>
          <CardChip label="Create Account" />
          <CardChip label="Invite Team" />
          <CardChip label="Import Content" />
        </GroupColumn>
        <GroupColumn title="Account Settings" count={3}>
          <CardChip label="Profile" />
          <CardChip label="Notifications" />
          <CardChip label="Permissions" />
        </GroupColumn>
      </div>
      <div className="flex items-center gap-1.5 mt-3">
        <div className="flex -space-x-1.5">
          {['#7161EF', '#18181B', '#86868C'].map((c) => (
            <span
              key={c}
              className="w-4 h-4 rounded-full border-2 border-[#F5F5F6]"
              style={{ background: c }}
            />
          ))}
        </div>
        <span className="text-[10px] text-[#9C9CA3]">3 participants sorting live</span>
      </div>
    </div>
  </WindowChrome>
);

export default CardSortMockup;
