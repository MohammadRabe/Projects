import React, { useContext, useEffect, useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { LangContext } from '../../../contexts/LanguageContext';


const DropDownLang = () => {
  const items = [
    {
      label: 'en',
      key: 'en',
    },

    {
      label: 'ar',
      key: 'ar',
    },
  ];
  const {lang, setLang} = useContext(LangContext);


  const changeLanguage = ({ key }) => {
    setLang(key);
  };
  return (
    <Dropdown menu={{ items, onClick: changeLanguage }}>
      <a className='text-dark' onClick={e => e.preventDefault()}>
        <Space>
          {lang}
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
}
export default DropDownLang;