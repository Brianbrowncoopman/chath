import React from "react";
import { Channel, useChatContext, MessageProvider } from "stream-chat-react";

import { ChannelInner, CreateChannel, EditChannel } from "./";

const ChannelContainer = ({
  isCreating,
  setIsCreating,
  isEditing,
  setIsEditing,
  createType,
}) => {
  const { channel } = useChatContext();

  if (isCreating) {
    return (
      <div className="channel__container">
        <CreateChannel createType={createType} setIsCreating={setIsCreating} />
      </div>
    );
  }

  if (isEditing) {
    return (
      <div className="channel__container">
        <EditChannel setIsEditing={setIsEditing} />
      </div>
    );
  }

  const EmptyState = () => (
    <div className="channel-empty__container">
      <p className="channel-empty__first">
        Este es el principio de tu historial de chat
      </p>
      <p className="channel-empty__second">
        Mensajes enviados, cosas, emojis y mas!
      </p>
    </div>
  );

  return (
    <div className="channel__container">
      <Channel
        EmptyStateIndicator={EmptyState}
        Message={(messageProps, i) => (
          <MessageProvider key={i} {...messageProps} />
        )}
      >
        <ChannelInner setIsEditing={setIsEditing} />
      </Channel>
    </div>
  );
};

export default ChannelContainer;
