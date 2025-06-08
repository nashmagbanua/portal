
import React from 'react';
import { cn } from '@/lib/utils';

interface UserAvatarProps {
  avatar: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const avatarMap: Record<string, string> = {
  'avatar1': '👨‍💼',
  'avatar2': '👩‍💼',
  'avatar3': '👨‍🔧',
  'avatar4': '👩‍🔧',
  'avatar5': '👨‍💻',
  'avatar6': '👩‍💻',
  'avatar7': '👨‍🎓',
  'avatar8': '👩‍🎓',
  'avatar9': '🧑‍🏭',
  'avatar10': '👷‍♂️',
  'avatar11': '👷‍♀️',
  'avatar12': '🧑‍🔬'
};

const sizeClasses = {
  sm: 'w-8 h-8 text-lg',
  md: 'w-10 h-10 text-xl',
  lg: 'w-12 h-12 text-2xl'
};

const UserAvatar: React.FC<UserAvatarProps> = ({ avatar, size = 'md', className }) => {
  const emoji = avatarMap[avatar] || '👤';
  
  return (
    <div className={cn(
      "rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center cursor-pointer hover:bg-green-100 transition-colors",
      sizeClasses[size],
      className
    )}>
      {emoji}
    </div>
  );
};

export default UserAvatar;
