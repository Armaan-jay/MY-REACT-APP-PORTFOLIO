import React from "react";

function ChatWidget() {
  // Zapier web component is registered via index.html script tag.
  // We just render the custom element; it provides its own popup button.
  return (
    <zapier-interfaces-chatbot-embed
      is-popup="true"
      chatbot-id="cmha28fd4001cl1iuby2kzo1l"
      style={{ zIndex: 1000 }}
    ></zapier-interfaces-chatbot-embed>
  );
}

export default ChatWidget;
