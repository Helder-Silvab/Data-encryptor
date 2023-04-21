export function DecryptFile() {
  return (
    <div id="ficheiro">
      <div className="grid-1-1 labelColorWhite label-size-16 margin-top-10">
        Coloque a chave IV
      </div>
      <div className="grid-1-1 height50 height-reset border-radius-15 borderWhite padding10 margin-top-5">
        <textarea
          name="preview"
          id="preview"
          cols="30"
          rows="30"
          className="grid-1-1 border-none height-100-percent inputText resize-none labelColorWhite"
          placeholder="A sua chave IV"></textarea>
      </div>
      <div className="grid-1-1 labelColorWhite label-size-16 margin-top-10">
        Coloque a chave publica
      </div>
      <div className="grid-1-1 height50 height-reset border-radius-15 borderWhite padding10 margin-top-5">
        <textarea
          name="preview"
          id="preview"
          cols="30"
          rows="30"
          className="grid-1-1 border-none height-100-percent inputText resize-none labelColorWhite"
          placeholder="A sua chave publica"></textarea>
      </div>
      <div className="grid-1-1 labelColorWhite label-size-16 margin-top-20">
        Texto Encriptado
      </div>
      <div className="grid-1-1 height200 height-reset border-radius-15 borderWhite padding10 margin-top-5">
        <textarea
          name="preview"
          id="preview"
          cols="30"
          rows="30"
          className="grid-1-1 border-none height-100-percent inputText resize-none labelColorWhite"
          placeholder="O texto Encriptado"></textarea>
      </div>
    </div>
  );
}
