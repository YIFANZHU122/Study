import React, { useState } from 'react'
import { useComponentStore } from '../../stores/components';
import { Segmented } from 'antd';
import ComponentAttr from './ComponentAttr';
import ComponentStyle from './ComponentStyle';
import ComponentEvent from './ComponentEvent';

export default function Setting() {
  const { components } = useComponentStore();
  const [key, setKey] = useState('属性');

  return (
    <div>
      <Segmented
        options={['属性', '外观', '事件'] } block onChange={setKey}
      />
      <div>
        {
          key === '属性' && <ComponentAttr/>
        }
        {
           key === '外观' && <ComponentStyle/>
        }
        {
           key === '事件' && <ComponentEvent/>
        }
      </div>
    </div>
  );
}
