import Board from '../../components/Board';

function Main() {
  const imageLink =
    'http://itimg.chosun.com/sitedata/image/202001/14/2020011400634_0.jpg';
  // props
  const testData = [
    {
      id: 1,
      title: '1',
      category: 'A',
      time: 13,
      money: 100000,
      user: 'user1',
      imageLink: imageLink,
    },
    {
      id: 2,
      title: '2',
      category: 'A',
      time: 13,
      money: 100000,
      user: 'user1',
      imageLink: imageLink,
    },
    {
      id: 3,
      title: '3',
      category: 'A',
      time: 13,
      money: 100000,
      user: 'user1',
      imageLink: imageLink,
    },
  ];

  const BoardComponents = testData.map((boardData) => {
    return (
      <Board
        key={boardData.id}
        title={boardData.title}
        category={boardData.category}
        time={boardData.time}
        money={boardData.money}
        user={boardData.user}
        imageLink={boardData.imageLink}
      />
    );
  });

  return (
    <div>
      <div>홍당무마켓</div>
      {BoardComponents}
    </div>
  );
}

export default Main;
