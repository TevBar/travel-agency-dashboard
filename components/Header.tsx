import React from 'react';

interface HeaderProps {
  title: string;
  description: string;
}

const Header: React.FC<HeaderProps> = ({ title, description }) => {
  return (
    <header className="header">
      <article>
        <h1 className="p-40-semibold text-dark-100">{title}</h1>
        <p className="text-gray-500 text-lg">{description}</p>
      </article>
    </header>
  )
}

export default Header
