/* global QUnit */

import { CanvasTexture } from '../../../../src/textures/CanvasTexture.js';

import { Texture } from '../../../../src/textures/Texture.js';

export default QUnit.module( 'Textures', () => {

	QUnit.module( 'CanvasTexture', () => {

		// INHERITANCE
		QUnit.test( 'Extending', ( assert ) => {

			var object = new CanvasTexture();

			assert.strictEqual( object instanceof Texture, true, 'CanvasTexture extends from Texture' );

		} );

		// INSTANCING
		QUnit.todo( 'Instancing', ( assert ) => {

			assert.ok( false, 'everything\'s gonna be alright' );

		} );

		// PROPERTIES
		QUnit.todo( 'needsUpdate', ( assert ) => {

			assert.ok( false, 'everything\'s gonna be alright' );

		} );

		// PUBLIC
		QUnit.test( 'isCanvasTexture', ( assert ) => {

			const object = new CanvasTexture();
			assert.ok(
				object.isCanvasTexture,
				'CanvasTexture.isCanvasTexture should be true'
			);

		} );

	} );

} );
