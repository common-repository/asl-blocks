import {Button, ButtonGroup, PanelBody,} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

export default function WidthPanel( { selectedWidth, setAttributes } ) {
    function handleChange( newWidth ) {
        // Check if we are toggling the width off
        const width = selectedWidth === newWidth ? undefined : newWidth;

        // Update attributes.
        setAttributes( { width } );
    }

    return (
        <PanelBody title={ __( 'Width settings' ) }>
            <ButtonGroup aria-label={ __( 'Button width' ) }>
                { [ 25, 50, 75, 100 ].map( ( widthValue ) => {
                    return (
                        <Button
                            key={ widthValue }
                            isSmall
                            variant={
                                widthValue === selectedWidth
                                    ? 'primary'
                                    : undefined
                            }
                            onClick={ () => handleChange( widthValue ) }
                        >
                            { widthValue }%
                        </Button>
                    );
                } ) }
            </ButtonGroup>
        </PanelBody>
    );
}
