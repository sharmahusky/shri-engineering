'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils/cn';
import { navigation } from '@/lib/constants/navigation';
import { NavItem } from '@/types';

interface NavigationProps {
  mobile?: boolean;
  onLinkClick?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ mobile = false, onLinkClick }) => {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    
    if (!mobile) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobile]);
  
  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname?.startsWith(href);
  };
  
  const handleDropdownToggle = (label: string) => {
    if (mobile) {
      setOpenDropdown(openDropdown === label ? null : label);
    }
  };
  
  const handleMouseEnter = (label: string) => {
    if (!mobile) {
      setOpenDropdown(label);
    }
  };
  
  const handleMouseLeave = () => {
    if (!mobile) {
      setOpenDropdown(null);
    }
  };
  
  const renderNavItem = (item: NavItem, level: number = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const active = isActive(item.href);
    
    if (hasChildren) {
      return (
        <div 
          key={item.href} 
          className="relative"
          onMouseEnter={() => handleMouseEnter(item.label)}
          onMouseLeave={handleMouseLeave}
          ref={level === 0 ? dropdownRef : undefined}
        >
          <button
            onClick={() => handleDropdownToggle(item.label)}
            className={cn(
              'flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors rounded-md',
              active
                ? 'text-primary-900 bg-primary-50'
                : 'text-neutral-600 hover:text-primary-900 hover:bg-neutral-50',
              level > 0 && 'text-sm w-full text-left'
            )}
          >
            {item.label}
            <svg
              className={cn(
                'w-3.5 h-3.5 transition-transform opacity-70',
                openDropdown === item.label && 'rotate-180'
              )}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {(openDropdown === item.label || (!mobile && openDropdown === item.label)) && (
            <div
              className={cn(
                mobile 
                  ? 'pl-4 mt-1 space-y-1' 
                  : 'absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-soft border border-neutral-200 py-2 z-50 min-w-max animate-in fade-in slide-in-from-top-1 duration-200'
              )}
            >
              {item.children?.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={onLinkClick}
                  className={cn(
                    'block px-4 py-2.5 text-sm transition-colors border-l-2 border-transparent',
                    isActive(child.href)
                      ? 'text-primary-900 font-medium bg-primary-50 border-primary-600'
                      : 'text-neutral-600 hover:text-primary-900 hover:bg-neutral-50 hover:border-neutral-300'
                  )}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      );
    }
    
    return (
      <Link
        key={item.href}
        href={item.href}
        onClick={onLinkClick}
        className={cn(
          'px-3 py-2 text-sm font-medium transition-colors rounded-md',
          active
            ? 'text-primary-900 bg-primary-50'
            : 'text-neutral-600 hover:text-primary-900 hover:bg-neutral-50',
          level > 0 && 'block'
        )}
      >
        {item.label}
      </Link>
    );
  };
  
  return (
    <nav className={cn(mobile ? 'flex flex-col space-y-1' : 'hidden lg:flex lg:items-center lg:space-x-2')}>
      {navigation.map((item) => renderNavItem(item))}
    </nav>
  );
};

