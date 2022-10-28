export const columns = [
  {
    title: 'ID',
    width: 100,
    dataIndex: 'id',
    key: 'ID',
    fixed: 'left',
  },
  {
    title: 'Tên',
    width: 100,
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: '1',
  },
  {
    title: 'Pass',
    dataIndex: 'pass',
    key: '2',
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: '3',
  },
  {
    title: 'Birthday',
    dataIndex: 'birthday',
    key: '4',
  },
  {
    title: 'Avatar',
    dataIndex: 'avatar',
    key: '5',
  },
  {
    title: 'Role',
    dataIndex: 'role',
    key: '6',
  },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: () => <a class="btn-delete">Xoá</a>,
  },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: () => <a class="btn-put">Sửa</a>,
  },
];
