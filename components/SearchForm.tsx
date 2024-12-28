'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { SearchFormReset } from './SearchFormReset';
import { Search } from 'lucide-react';

const SearchForm = ({ query }: { query?: string }) => {
  const [searchValue, setSearchValue] = useState(query || '');
  const router = useRouter();

  const handleReset = () => {
    setSearchValue('');
    router.push('/'); 
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.trim()) {
      router.push(`/?query=${encodeURIComponent(searchValue)}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        name="query"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="search-input"
        placeholder="Search Startups"
      />
      <div className="flex gap-2">
        {searchValue && <SearchFormReset onReset={handleReset} />}
        <button type="submit" className="search-btn text-white"><Search className='size-7'/></button>
      </div>
    </form>
  );
};

export default SearchForm;
