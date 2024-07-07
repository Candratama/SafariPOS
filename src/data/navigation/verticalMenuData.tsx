// Type Imports
import type { VerticalMenuDataType } from '@/types/menuTypes'

// Vertical Menu Data

const verticalMenuData = (): VerticalMenuDataType[] => [
  {
    label: 'Dashboards',
    children: [
      {
        label: 'Analytics'
      },
      {
        label: 'eCommerce'
      }
    ]
  },
  {
    label: 'Calendar'
  },
  {
    label: 'FAQ'
  },
  {
    label: 'Menu Level',
    children: [
      {
        label: 'Menu Level 2.1'
      },
      {
        label: 'Menu Level 2.2',
        children: [
          {
            label: 'Menu Level 3.1'
          },
          {
            label: 'Menu Level 3.2'
          }
        ]
      }
    ]
  },
  {
    label: 'Documentation'
  }
]

export default verticalMenuData
