/* eslint-disable react/jsx-key */
// Next Imports
import { useParams } from 'next/navigation'

// MUI Imports
import { useTheme } from '@mui/material/styles'

// Third-party Imports
import PerfectScrollbar from 'react-perfect-scrollbar'

// Type Imports
import type { getDictionary } from '@/utils/getDictionary'
import type { VerticalMenuContextProps } from '@menu/components/vertical-menu/Menu'

// Component Imports
import { Menu, MenuItem, MenuSection, SubMenu } from '@menu/vertical-menu'

// Hook Imports
import useVerticalNav from '@menu/hooks/useVerticalNav'

// Styled Component Imports
import StyledVerticalNavExpandIcon from '@menu/styles/vertical/StyledVerticalNavExpandIcon'

// Style Imports
import menuItemStyles from '@core/styles/vertical/menuItemStyles'
import menuSectionStyles from '@core/styles/vertical/menuSectionStyles'

type RenderExpandIconProps = {
  open?: boolean
  transitionDuration?: VerticalMenuContextProps['transitionDuration']
}

type Props = {
  dictionary: Awaited<ReturnType<typeof getDictionary>>
  scrollMenu: (container: any, isPerfectScrollbar: boolean) => void
}

const RenderExpandIcon = ({ open, transitionDuration }: RenderExpandIconProps) => (
  <StyledVerticalNavExpandIcon open={open} transitionDuration={transitionDuration}>
    <i className='tabler-chevron-right' />
  </StyledVerticalNavExpandIcon>
)

const VerticalMenu = ({ dictionary, scrollMenu }: Props) => {
  // Hooks
  const theme = useTheme()
  const verticalNavOptions = useVerticalNav()
  const params = useParams()
  const { isBreakpointReached } = useVerticalNav()

  // Vars
  const { transitionDuration } = verticalNavOptions
  const { lang: locale } = params

  const ScrollWrapper = isBreakpointReached ? 'div' : PerfectScrollbar

  return (
    // eslint-disable-next-line lines-around-comment
    /* Custom scrollbar instead of browser scroll, remove if you want browser scroll only */
    <ScrollWrapper
      {...(isBreakpointReached
        ? {
            className: 'bs-full overflow-y-auto overflow-x-hidden',
            onScroll: container => scrollMenu(container, false)
          }
        : {
            options: { wheelPropagation: false, suppressScrollX: true },
            onScrollY: container => scrollMenu(container, true)
          })}
    >
      {/* Incase you also want to scroll NavHeader to scroll with Vertical Menu, remove NavHeader from above and paste it below this comment */}
      {/* Vertical Menu */}
      <Menu
        popoutMenuOffset={{ mainAxis: 23 }}
        menuItemStyles={menuItemStyles(verticalNavOptions, theme)}
        renderExpandIcon={({ open }) => <RenderExpandIcon open={open} transitionDuration={transitionDuration} />}
        renderExpandedMenuItemIcon={{ icon: <i className='tabler-circle text-xs' /> }}
        menuSectionStyles={menuSectionStyles(verticalNavOptions, theme)}
      >
        <MenuSection label={dictionary['navigation'].home}>
          <MenuItem href={`/${locale}/home'`} icon={<i className='tabler-smart-home' />}>
            {dictionary['navigation'].dashboard}
          </MenuItem>
        </MenuSection>
        <MenuSection label={dictionary['navigation'].admin}>
          <SubMenu
            label={`${dictionary['navigation'].user} & ${dictionary['navigation'].roles}`}
            icon={<i className='tabler-users' />}
          >
            <MenuItem href={`/${locale}/user'`}>{dictionary['navigation'].user}</MenuItem>
            <MenuItem href={`/${locale}/role'`}>{dictionary['navigation'].roles}</MenuItem>
          </SubMenu>
        </MenuSection>
        <SubMenu label={dictionary['navigation'].business} icon={<i className='tabler-building' />}>
          <MenuItem href={`/${locale}/business'`}>{dictionary['navigation'].business}</MenuItem>
          <MenuItem href={`/${locale}/outlet'`}>{dictionary['navigation'].outlet}</MenuItem>
          <MenuItem href={`/${locale}/tax'`}>{dictionary['navigation'].tax}</MenuItem>
          <MenuItem href={`/${locale}/payment'`}>{dictionary['navigation'].payment}</MenuItem>
        </SubMenu>
        <MenuSection label={dictionary['navigation'].operational}>
          <SubMenu label={dictionary['navigation'].products} icon={<i className='tabler-package' />}>
            <MenuItem href={`/${locale}/product'`}>{dictionary['navigation'].products}</MenuItem>
            <MenuItem href={`/${locale}/category'`}>{dictionary['navigation'].category}</MenuItem>
            <MenuItem href={`/${locale}/unit'`}>{dictionary['navigation'].unit}</MenuItem>
            <MenuItem href={`/${locale}/variant'`}>{dictionary['navigation'].variant}</MenuItem>
          </SubMenu>
          <SubMenu label={dictionary['navigation'].sales} icon={<i className='tabler-cash' />}>
            <MenuItem href={`/${locale}/sale'`}>{dictionary['navigation'].allSales}</MenuItem>
            <MenuItem href={`/${locale}/pos'`}>{dictionary['navigation'].pos}</MenuItem>
            <MenuItem href={`/${locale}/draft'`}>{dictionary['navigation'].draft}</MenuItem>
            <MenuItem href={`/${locale}/quotation'`}>{dictionary['navigation'].quotation}</MenuItem>
          </SubMenu>
        </MenuSection>
      </Menu>
      {/* <Menu
        popoutMenuOffset={{ mainAxis: 23 }}
        menuItemStyles={menuItemStyles(verticalNavOptions, theme)}
        renderExpandIcon={({ open }) => <RenderExpandIcon open={open} transitionDuration={transitionDuration} />}
        renderExpandedMenuItemIcon={{ icon: <i className='tabler-circle text-xs' /> }}
        menuSectionStyles={menuSectionStyles(verticalNavOptions, theme)}
      >
        <GenerateVerticalMenu menuData={menuData(dictionary)} />
      </Menu> */}
    </ScrollWrapper>
  )
}

export default VerticalMenu
