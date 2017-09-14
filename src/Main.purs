module Main where

import Prelude
import Control.Monad.ST (ST, newSTRef, readSTRef, modifySTRef)
import Control.Monad.Eff (Eff)
import Data.Maybe (Maybe(..))
import Graphics.Canvas (CANVAS, rect, fillPath, setFillStyle, getContext2D,
                        getCanvasElementById, translate, rotate, lineTo, moveTo, closePath)
import Partial.Unsafe (unsafePartial)
import Math (pi, asin, sqrt, sin, cos)
import Graphics.Drawing as TwoD
import Color (Color, lighten)
import Color (Color) as ColorType
import Graphics.Isometric(rotateX)
import MyMod
n=35.0
main :: Eff (canvas :: CANVAS) Unit
main = void $ unsafePartial do
  Just canvas <- getCanvasElementById "canvas1"
  ctx <- getContext2D canvas
--back
  _ <-setFillStyle "#fdf900" ctx
  _ <-fillPath ctx $ do
    _ <-moveTo ctx (rotateA (angle n)+35.0) ((rotateB (angle n))+35.0)
    _ <-lineTo ctx (rotateE (angle n)+35.0) ((rotateF (angle n))+35.0)
    _ <-lineTo ctx (rotateC (angle n)+35.0) ((rotateD (angle n))+35.0)
    _ <-lineTo ctx (rotateG (angle n)+35.0) ((rotateH (angle n))+35.0)
    closePath ctx
--right
  _ <-setFillStyle "#01d6d3" ctx
  _ <-fillPath ctx $ do
    _ <-moveTo ctx (rotateA (angle n)) (rotateB (angle n))
    _ <-lineTo ctx (rotateA (angle n)+35.0) ((rotateB (angle n))+35.0)
    _ <-lineTo ctx (rotateE (angle n)+35.0) ((rotateF (angle n))+35.0)
    _ <-lineTo ctx (rotateE (angle n)) (rotateF (angle n))
    closePath ctx
--left
  _ <-setFillStyle "#ef3737" ctx
  _ <-fillPath ctx $ do
    _ <-moveTo ctx (rotateA (angle n)) (rotateB (angle n))
    _ <-lineTo ctx (rotateA (angle n)+35.0) ((rotateB (angle n))+35.0)
    _ <-lineTo ctx (rotateG (angle n)+35.0) ((rotateH (angle n))+35.0)
    _ <-lineTo ctx (rotateG (angle n)) (rotateH (angle n))
    closePath ctx
--bottom
  _ <-setFillStyle "#00ff00" ctx
  _ <-fillPath ctx $ do
    _ <-moveTo ctx (rotateG (angle n)) (rotateH (angle n))
    _ <-lineTo ctx (rotateG (angle n)+35.0) ((rotateH (angle n))+35.0)
    _ <-lineTo ctx (rotateC (angle n)+35.0) ((rotateD (angle n))+35.0)
    _ <-lineTo ctx (rotateC (angle n)) ((rotateD (angle n)))
    closePath ctx
--top
  _ <-setFillStyle "#082090" ctx
  _ <-fillPath ctx $ do
    _ <-moveTo ctx (rotateC (angle n)) (rotateD (angle n))
    _ <-lineTo ctx (rotateC (angle n)+35.0) (rotateD (angle n)+35.0)
    _ <-lineTo ctx (rotateE (angle n)+35.0) (rotateF (angle n)+35.0)
    _ <-lineTo ctx (rotateE (angle n)) (rotateF (angle n))
    closePath ctx
--front
  _ <-setFillStyle "#df01a5" ctx
  _ <-fillPath ctx $ do
    _ <-moveTo ctx (rotateA (angle n)) (rotateB (angle n))
    _ <-lineTo ctx (rotateE (angle n)) (rotateF (angle n))
    _ <-lineTo ctx (rotateC (angle n)) (rotateD (angle n))
    _ <-lineTo ctx (rotateG (angle n)) (rotateH (angle n))
    closePath ctx


  fillPath ctx $ rect ctx
    { x: 150.0
    , y: 150.0
    , w: 0.0
    , h: 0.0
    }
