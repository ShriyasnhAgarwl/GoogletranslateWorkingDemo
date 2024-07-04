function GoogleTranslateDemoView(props) {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-red-100">
        <h5 className="text-[20px] font-[600] pb-4 text-[#489BF6]">
          Google Translate Working Demo
        </h5>
        <p className="text-[14px] font-[400] mb-10 px-16 text-center text-[#1C2347]">
          Implementing the google translation api to the same, making the
          feature in the 30 mins time, kindly ignore the UI, not planned as of
          the date.
        </p>
        <div className="flex my-2">
          <select
            className="mr-5 rounded-md p-4"
            disabled
            value={props.sourceLanguage}
            onChange={props.handleSourceLanguageChange}
          >
            <option value="">English</option>
          </select>
          <select
            className="rounded-md p-4"
            value={props.targetLanguage}
            onChange={props.handleTargetLanguageChange}
          >
            {props.languages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mt-5 w-full px-24">
          <h5 className="font-[600] text-[#959595]">Text to convert</h5>
          <textarea
            value={props.textToConvert}
            onChange={props.handleTextToConvertChange}
            className="text-[14px] font-[500] p-2.5 min-h-[200px] w-full text-[14px] text-[#959595] bg-white rounded-lg border-[1px] border-[#C1C3C0] outline-0 focus:border-[#489BF6] my-2"
          ></textarea>
        </div>
        <div className="mt-5 px-24 w-full">
          <h5 className="font-[600] text-[#959595]">Converted Text</h5>
          <textarea
            value={props.convertedText}
            readOnly
            className="text-[14px] font-[500] p-2.5 min-h-[200px] w-full text-[14px] text-[#959595] bg-white rounded-lg border-[1px] border-[#C1C3C0] outline-0 focus:border-[#489BF6] my-2"
          ></textarea>
        </div>
        <div>
          <button
            onClick={() =>
              props.handleTranslate(props.textToConvert, props.targetLanguage)
            }
            className="text-white font-[600] text-[16px] border-[1px] border-[#3D3C46] rounded-md bg-[#489BF6] py-2 px-10 hover:scale-[1.05] hover:bg-green-500 duration-300 max-md:px-2"
          >
            Translate
          </button>
        </div>
      </div>
    </>
  );
}

export default GoogleTranslateDemoView;
