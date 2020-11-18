import React from 'react';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-github';

export interface EditorProps {
  code: string;
  onChange: (value: string) => void;
}

export const Editor: React.FC<EditorProps> = ({code, onChange}) => {
  return (
      <AceEditor
        mode="javascript"
        theme="github"
        width="100%"
        value={code}
        onChange={onChange}
        editorProps={{
          $blockScrolling: true
        }}
      />
  )
};
