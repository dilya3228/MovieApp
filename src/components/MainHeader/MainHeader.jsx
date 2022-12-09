import { Menu } from 'antd'

function MainHeader({ setSelectedPage }) {
  const handleClickPage = (page) => {
    setSelectedPage(page.key)
  }

  return (
    <div className="menu">
      <Menu mode="horizontal" className="button-choise" onClick={handleClickPage}>
        <Menu.Item key="search">Search</Menu.Item>
        <Menu.Item key="rated">Rated</Menu.Item>
      </Menu>
    </div>
  )
}

export default MainHeader
