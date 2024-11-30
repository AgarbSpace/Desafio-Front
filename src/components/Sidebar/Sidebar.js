import React from 'react';
import StyledSidebar from './styleds/styled_sidebar';
import { ContainerOutlined, FormOutlined, ApartmentOutlined, BellOutlined, HistoryOutlined, UserOutlined } from '@ant-design/icons';

const icons = [<ContainerOutlined className='icon'/>, <FormOutlined className='icon' />, <ApartmentOutlined className='icon' />, <BellOutlined className='icon' />, <HistoryOutlined className='icon' />, <UserOutlined className='icon' />  ]

const Sidebar = () => {
  function addLine(event) {
    event.preventDefault();
    const iconContainers = document.querySelectorAll('.icon_container');
    iconContainers.forEach(container => {
      const icon = container.querySelector('.icon');
      const line = container.querySelector('.line');
      icon.classList.remove('active');
      line.classList.remove('active');
    });

    const icon = event.target.querySelector('.icon');
    const line = event.target.querySelector('.line');
    icon.classList.add('active');
    line.classList.add('active');
  }

  return (
    <StyledSidebar>
        <div className='white'></div>
        {icons.map((icon) => 
          <div className='icon_container' onClick = {addLine}>
            <div className='line'></div>
            {icon}
          </div>
        )}
    </StyledSidebar>
  );
};

export default Sidebar;