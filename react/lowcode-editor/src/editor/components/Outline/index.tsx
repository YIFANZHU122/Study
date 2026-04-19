import React from 'react'
import { Tree } from 'antd';
import type { TreeDataNode, TreeProps } from 'antd';
import { useComponentStore } from '../../stores/components';
import { DownOutlined } from '@ant-design/icons';

export default function Outline() {

  const { components ,setCurComponentId} = useComponentStore();

  return (
    <Tree
      fieldNames={{ title: 'desc', key: 'id' }}
      showLine
      switcherIcon={<DownOutlined />}
      defaultExpandAll={true}
      treeData={components as []}
      onSelect={([selectedKey])=> {
        setCurComponentId(selectedKey as number);
      }}
    />
  )
}
