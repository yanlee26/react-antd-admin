import { Button } from 'antd';
import LuckyExcel from 'luckyexcel';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Detail: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // const luckysheet = window.luckysheet;
    // console.log(111, luckysheet.transformExcelToLuckyByUrl);
    luckysheet.create({
      container: 'luckysheet',
      plugins: ['chart'],
      showinfobar: false,
    });
    const value = 'https://minio.cnbabylon.com/public/luckysheet/Activity%20costs%20tracker.xlsx';
    // 'https://minio.cnbabylon.com/public/luckysheet/money-manager-2.xlsx';

    loadTable(value, 'aa');
  }, []);

  function goBack() {
    navigate(-1);
  }

  function loadTable(value, name) {
    if (value == '') {
      return;
    }

    LuckyExcel.transformExcelToLuckyByUrl(value, name, (exportJson, luckysheetfile) => {
      if (exportJson.sheets == null || exportJson.sheets.length == 0) {
        alert('Failed to read the content of the excel file, currently does not support xls files!');

        return;
      }

      // jsonData.value = exportJson;

      console.log(exportJson);
      window.luckysheet.destroy();

      window.luckysheet.create({
        container: 'luckysheet',
        showinfobar: false,
        data: exportJson.sheets,
        title: exportJson.info.name,
        userInfo: exportJson.info.name.creator,
      });
    });
  }

  return (
    <div>
      <Button onClick={goBack}>back</Button>
      <div id="luckysheet"></div>
    </div>
  );
};

export default Detail;
