module Data.Op where

import Prelude

import Data.Functor.Contravariant (class Contravariant)
import Data.Newtype (class Newtype)

-- | The opposite of the function category.
newtype Op a b = Op (b -> a)

derive instance newtypeOp :: Newtype (Op a b) _

instance semigroupoidOp :: Semigroupoid Op where
  compose (Op f) (Op g) = Op (compose g f)

instance categoryOp :: Category Op where
  id = Op id

instance contravariantOp :: Contravariant (Op a) where
  cmap f (Op g) = Op (g <<< f)
