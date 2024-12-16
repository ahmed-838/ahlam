const Model = () => {
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // معالجة الصورة المرفوعة
      console.log("صورة مرفوعة:", file);
    }
  };

  return (
    <div>
      <h1>صفحة نموذج التعلم الآلي</h1>
      <p>يرجى رفع صورة لتحليلها باستخدام نموذج التعلم الآلي.</p>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {/* يمكنك إضافة المزيد من المحتوى هنا */}
    </div>
  );
}

export default Model; 