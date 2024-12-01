import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';
import { getFilters } from '../lib/db';

interface CategoryFiltersProps {
  category: string;
  subcategory?: string;
}

interface FilterOption {
  label: string;
  count?: number;
  range?: [number | null, number | null];
}

interface Filter {
  id: string;
  label: string;
  type: 'range' | 'select' | 'multiselect';
  min?: number;
  max?: number;
  options?: FilterOption[];
  presets?: FilterOption[];
}

const CategoryFilters: React.FC<CategoryFiltersProps> = ({ category, subcategory }) => {
  const [expandedFilters, setExpandedFilters] = useState<Set<string>>(new Set(['price']));
  const [selectedValues, setSelectedValues] = useState<Record<string, any>>({});
  const filters = getFilters(category, subcategory);

  const toggleFilter = (filterId: string) => {
    const newExpanded = new Set(expandedFilters);
    if (newExpanded.has(filterId)) {
      newExpanded.delete(filterId);
    } else {
      newExpanded.add(filterId);
    }
    setExpandedFilters(newExpanded);
  };

  const handleFilterChange = (filterId: string, value: any) => {
    setSelectedValues(prev => ({
      ...prev,
      [filterId]: value
    }));
  };

  const renderFilterContent = (filter: Filter) => {
    switch (filter.type) {
      case 'range':
        return (
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <input
                type="number"
                placeholder="Min"
                className="w-full px-3 py-2 border rounded-md"
                value={selectedValues[filter.id]?.min || ''}
                onChange={(e) => handleFilterChange(filter.id, {
                  ...selectedValues[filter.id],
                  min: e.target.value
                })}
              />
              <span>-</span>
              <input
                type="number"
                placeholder="Max"
                className="w-full px-3 py-2 border rounded-md"
                value={selectedValues[filter.id]?.max || ''}
                onChange={(e) => handleFilterChange(filter.id, {
                  ...selectedValues[filter.id],
                  max: e.target.value
                })}
              />
            </div>
            {filter.presets && (
              <div className="space-y-2">
                {filter.presets.map((preset, index) => (
                  <button
                    key={`${filter.id}-preset-${index}`}
                    className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50 rounded-md"
                    onClick={() => handleFilterChange(filter.id, {
                      min: preset.range?.[0],
                      max: preset.range?.[1]
                    })}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        );

      case 'select':
      case 'multiselect':
        return (
          <div className="space-y-2">
            {filter.options?.map((option, index) => (
              <label key={`${filter.id}-option-${index}`} className="flex items-center space-x-2">
                <input
                  type={filter.type === 'multiselect' ? 'checkbox' : 'radio'}
                  name={filter.id}
                  checked={
                    filter.type === 'multiselect'
                      ? selectedValues[filter.id]?.includes(option.label)
                      : selectedValues[filter.id] === option.label
                  }
                  onChange={() => {
                    if (filter.type === 'multiselect') {
                      const current = selectedValues[filter.id] || [];
                      const updated = current.includes(option.label)
                        ? current.filter(v => v !== option.label)
                        : [...current, option.label];
                      handleFilterChange(filter.id, updated);
                    } else {
                      handleFilterChange(filter.id, option.label);
                    }
                  }}
                  className="text-blue-600"
                />
                <span className="text-sm text-gray-700">{option.label}</span>
                {option.count !== undefined && (
                  <span className="text-xs text-gray-500">({option.count})</span>
                )}
              </label>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm divide-y">
      {filters.map((filter) => (
        <div key={`filter-${filter.id}`} className="p-4">
          <button
            className="flex items-center justify-between w-full"
            onClick={() => toggleFilter(filter.id)}
          >
            <span className="font-medium">{filter.label}</span>
            {expandedFilters.has(filter.id) ? (
              <ChevronUp className="h-4 w-4 text-gray-400" />
            ) : (
              <ChevronDown className="h-4 w-4 text-gray-400" />
            )}
          </button>
          {expandedFilters.has(filter.id) && (
            <div className="mt-4">
              {renderFilterContent(filter)}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CategoryFilters;