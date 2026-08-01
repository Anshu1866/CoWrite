"use client";

import { useState } from "react";
import { Bell } from "lucide-react";
import {
  useInboxNotifications,
  useUnreadInboxNotificationsCount,
} from "@liveblocks/react/suspense";
import { InboxNotification, InboxNotificationList } from "@liveblocks/react-ui";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export const NotificationsPopover = () => {
  const { inboxNotifications } = useInboxNotifications();
  const { count } = useUnreadInboxNotificationsCount();

  return (
    <Popover>
      <PopoverTrigger className="relative h-9 w-9 flex items-center justify-center rounded-full hover:bg-neutral-200/80">
        <Bell className="size-5" />
        {count > 0 && (
          <span className="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center">
            {count > 9 ? "9+" : count}
          </span>
        )}
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0 max-h-96 overflow-y-auto">
        {inboxNotifications.length === 0 ? (
          <p className="text-sm text-neutral-500 p-4 text-center">
            No notifications yet
          </p>
        ) : (
          <InboxNotificationList>
            {inboxNotifications.map((inboxNotification) => (
              <InboxNotification
                key={inboxNotification.id}
                inboxNotification={inboxNotification}
              />
            ))}
          </InboxNotificationList>
        )}
      </PopoverContent>
    </Popover>
  );
};