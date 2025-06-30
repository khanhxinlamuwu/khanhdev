export default function Home() {
  const sendLocation = () => {
    if (!navigator.geolocation) {
      alert("Trình duyệt không hỗ trợ định vị.");
      return;
    }

    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;

      try {
        const res = await fetch('/api/send', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ latitude, longitude }),
        });

        if (res.ok) alert('Gửi thành công!');
        else alert('Gửi thất bại.');
      } catch (error) {
        alert('Lỗi kết nối đến máy chủ.');
      }
    });
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Gửi vị trí</h1>
      <button onClick={sendLocation}>Gửi vị trí</button>
    </div>
  );
}
