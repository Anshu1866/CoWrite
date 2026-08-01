"use client";

import { useState, useRef } from "react";

interface DocumentInputProps {
  title: string;
  onTitleChange: (title: string) => void;
}

export const DocumentInput = ({ title, onTitleChange }: DocumentInputProps) => {
  const [value, setValue] = useState(title);
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleBlur = () => {
    setIsEditing(false);
    onTitleChange(value || "Untitled Document");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      inputRef.current?.blur();
    }
  };

  if (isEditing) {
    return (
      <input
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        autoFocus
        className="text-lg px-1.5 h-7 w-full border border-blue-400 rounded-sm focus:outline-none"
      />
    );
  }

  return (
    <span
      onClick={() => setIsEditing(true)}
      className="text-lg px-1.5 cursor-pointer truncate"
    >
      {title}
    </span>
  );
};