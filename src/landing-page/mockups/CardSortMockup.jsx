import React from 'react';
import { WindowChrome, CardChip, GroupColumn } from './primitives';

const CardSortMockup = ({ className = '', light = false }) => (
  <WindowChrome
    label="Card Sort · Onboarding Flow"
    className={className}
    light={light}
    right={
      <div className="flex items-center gap-2">
        <div className={`w-16 h-1.5 rounded-full overflow-hidden ${light ? 'bg-[#E4E4E7]' : 'bg-white/10'}`}>
          <div className="h-full w-4/5 bg-[#7161EF]" />
        </div>
        <span className={`text-[10px] font-semibold ${light ? 'text-[#9C9CA3]' : 'text-white/35'}`}>8/10</span>
      </div>
    }
  >
    <div className={`p-4 backdrop-blur-sm ${light ? 'bg-white/40' : 'bg-white/[0.03]'}`}>
      <div className="flex gap-3">
        <GroupColumn title="Unsorted" count={2} light={light}>
          <CardChip label="Billing FAQ" faded light={light} />
          <CardChip label="Data Export" faded light={light} />
        </GroupColumn>
        <GroupColumn title="Getting Started" count={3} light={light}>
          <CardChip label="Create Account" light={light} />
          <CardChip label="Invite Team" light={light} />
          <CardChip label="Import Content" light={light} />
        </GroupColumn>
        <GroupColumn title="Account Settings" count={3} light={light}>
          <CardChip label="Profile" light={light} />
          <CardChip label="Notifications" light={light} />
          <CardChip label="Permissions" light={light} />
        </GroupColumn>
      </div>
      <div className="flex items-center gap-1.5 mt-3">
        <div className="flex -space-x-1.5">
          {['#7161EF', '#F5F3F0', '#86868C'].map((c) => (
            <span
              key={c}
              className={`w-4 h-4 rounded-full border-2 ${light ? 'border-white' : 'border-[#1C1C1F]'}`}
              style={{ background: c }}
            />
          ))}
        </div>
        <span className={`text-[10px] ${light ? 'text-[#9C9CA3]' : 'text-white/35'}`}>3 participants sorting live</span>
      </div>
    </div>
  </WindowChrome>
);

export default CardSortMockup;
