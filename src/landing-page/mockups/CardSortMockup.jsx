import React from 'react';
import { WindowChrome, CardChip, GroupColumn } from './primitives';
import './CardSortMockup.css';

const CardSortMockup = ({ className = '', light = false }) => (
  <WindowChrome
    label="Card Sort · Onboarding Flow"
    className={className}
    light={light}
    right={
      <div className="csm-progress-row">
        <div className={`csm-progress-track ${light ? 'is-light' : ''}`}>
          <div className="csm-progress-fill" />
        </div>
        <span className={`csm-progress-count ${light ? 'is-light' : ''}`}>8/10</span>
      </div>
    }
  >
    <div className={`csm-body ${light ? 'is-light' : ''}`}>
      <div className="csm-groups-row">
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
      <div className="csm-avatars-row">
        <div className="csm-avatars">
          {['#7161EF', '#F5F3F0', '#86868C'].map((c) => (
            <span key={c} className={`csm-avatar ${light ? 'is-light' : ''}`} style={{ background: c }} />
          ))}
        </div>
        <span className={`csm-live-text ${light ? 'is-light' : ''}`}>3 participants sorting live</span>
      </div>
    </div>
  </WindowChrome>
);

export default CardSortMockup;
