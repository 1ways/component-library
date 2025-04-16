import { useState, Children } from 'react';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'

import { FaRegCopy } from "react-icons/fa6";

export default function CodeBlock({children, language = 'javascript'}) {
    // This state helps show and hide 'Copied!' text when it changes
    const [copied, setCopied] = useState(false)

    function copyCode() {
        // Convert whatever children are to a string
        const codeToCopy = Children.toArray(children).join('')

        // Copy text to the clipboard and log error if the copy fails
        navigator.clipboard.writeText(codeToCopy)
            .then(() => {
                setCopied(true)
                setTimeout(() => setCopied(false), 1500)
            })
            .catch(err => console.error('Failed to copy:', err))
    }

    return (
        <div className="usage">
            <button 
                className='usage__copy' 
                onClick={copyCode} 
                aria-label={copied ? 'Code copied!' : 'Copy code to clipboard'}
            >
                {copied && <span>Copied!</span>}
                <FaRegCopy />
            </button>

            <SyntaxHighlighter
                language={language}
                style={dracula}
                customStyle={{
                    backgroundColor: '#1e1e1e',
                    fontSize: '15px',
                    lineHeight: '1.5',
                    borderRadius: '8px',
                    padding: '16px',

                }}
                wrapLongLines
            >
                {children}
            </SyntaxHighlighter>
        </div>
    )
}