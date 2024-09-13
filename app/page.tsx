'use client'

import { SerloEditor, SerloEditorProps, SerloRenderer } from '@serlo/editor'
import { Card, Heading } from '@radix-ui/themes'
import React from 'react'

export default function Home() {
  const [state, setState] = React.useState<SerloEditorProps['initialState']>({
    plugin: 'rows',
  })

  return (
    <main>
      <Heading>Test Serlo editor</Heading>
      <Card>
        <SerloEditor
          initialState={state}
          editorVariant="unknown"
          onChange={setState}
        >
          {(editor) => <div>{editor.element}</div>}
        </SerloEditor>
      </Card>
      <Heading>State</Heading>
      <Card>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </Card>
      <Heading>Renderer</Heading>
      <Card>
        <SerloRenderer state={state} editorVariant="unknown" />
      </Card>
    </main>
  )
}
