
import React from 'react';
import { cn } from '@/lib/utils';

interface AvatarPickerProps {
  selectedAvatar: string;
  onAvatarSelect: (avatar: string) => void;
  className?: string;
}

const avatarOptions = [
  { id: 'avatar1', emoji: '👨‍💼', label: 'Business Man' },
  { id: 'avatar2', emoji: '👩‍💼', label: 'Business Woman' },
  { id: 'avatar3', emoji: '👨‍🔧', label: 'Mechanic' },
  { id: 'avatar4', emoji: '👩‍🔧', label: 'Engineer' },
  { id: 'avatar5', emoji: '👨‍💻', label: 'Tech Guy' },
  { id: 'avatar6', emoji: '👩‍💻', label: 'Tech Woman' },
  { id: 'avatar7', emoji: '👨‍🎓', label: 'Graduate' },
  { id: 'avatar8', emoji: '👩‍🎓', label: 'Graduate Woman' },
  { id: 'avatar9', emoji: '🧑‍🏭', label: 'Factory Worker' },
  { id: 'avatar10', emoji: '👷‍♂️', label: 'Construction' },
  { id: 'avatar11', emoji: '👷‍♀️', label: 'Construction Woman' },
  { id: 'avatar12', emoji: '🧑‍🔬', label: 'Scientist' }
];

const AvatarPicker: React.FC<AvatarPickerProps> = ({ selectedAvatar, onAvatarSelect, className }) => {
  return (
    <div className={cn("space-y-3", className)}>
      <label className="text-green-800 font-medium text-sm">Choose Avatar</label>
      <div className="grid grid-cols-4 gap-3">
        {avatarOptions.map((avatar) => (
          <button
            key={avatar.id}
            type="button"
            onClick={() => onAvatarSelect(avatar.id)}
            className={cn(
              "w-12 h-12 rounded-full border-2 flex items-center justify-center text-xl transition-all hover:scale-110",
              selectedAvatar === avatar.id
                ? "border-green-500 bg-green-50 shadow-lg"
                : "border-gray-200 hover:border-green-300"
            )}
            title={avatar.label}
          >
            {avatar.emoji}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AvatarPicker;
