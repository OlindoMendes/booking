import { it, expect, describe } from 'vitest'
import { render } from '@testing-library/vue';

import ComparisonHotelTable from '../../components/ComparisonHotelTable.vue'
describe('ComparisonHotelTable', () => {

  it('exists hotels those names and location', async () => {
    const { getByText } = render(ComparisonHotelTable, {
      props: {
        hotels: [
          { id: 1, name: 'Hotel Sunshine', location: 'Rio de Janeiro', price: '$100' },
          { id: 2, name: 'Mountain Retreat', location: 'Alps', price: '$150' }
        ]
      }

    })
    expect(getByText('Hotel Sunshine')).toBeDefined()
    expect(getByText('Mountain Retreat')).toBeDefined()
    expect(getByText('Rio de Janeiro')).toBeDefined()
    expect(getByText('$100')).toBeDefined()
  })
  it('renders no message when no hotels are available', async () => {
    const { getByText } = render(ComparisonHotelTable, {
      props: {
        hotels: []
      }
    })
    

  })

})